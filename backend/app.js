// import express module
const express = require("express");

// import body-parser module
const bodyParser = require("body-parser");

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/footDB');

const axios = require("axios");

//import bcrypt module
const bcrypt = require("bcrypt");

//import multer module

const multer = require("multer");
//import JWT module
const jwt = require('jsonwebtoken');
//import EXPRESS-SESSION module
const session = require('express-session');

//import path module

const path = require("path"); 

// creates express application (app)
const app = express();

// App configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// files : shortcut that replace backend/images 

app.use('/files', express.static(path.join('backend/images')));

// File type  
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
   }



   const storageConfig = multer.diskStorage({

    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
    }
    cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
   extension;
    cb(null, imgName);
    }
   });

//    Session Configuration
   const secretKey = 'your-secret-key';
app.use(session({
secret: secretKey,
}));


// Models Importation
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Stadium = require("./models/stadium");



// DataBase Simulation
// let matchesTab = [
//     { id: 1, scoreOne: 2, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD" },
//     { id: 2, scoreOne: 4, scoreTwo: 2, teamOne: "CA", teamTwo: "EST" },
//     { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: "PSG", teamTwo: "LIV" }];

// let usersTab = [
//     { id: 1, firstName: "Med", lastName: "Ben Saleh", email: "m@m.m", pwd: "mmm"},
//     { id: 2, firstName: "saleh", lastName: "Ben yaghlen", email: "m@o.m", pwd: "mmyym"},
//     { id: 3, firstName: "Makrem", lastName: "loukil", email: "o@m.l", pwd: "mrrmm"},];




// Business Logic : Get All Matches
app.get("/api/matches", (req, res) => {
    console.log("Here into BL: Get All Matches");
    Match.find().then((docs) => {
        // console.log("here documents from matches collection",docs);
        res.json({ matches: docs })
    });
});

// Business Logic : Get Matche By Id
app.get("/api/matches/:id", (req, res) => {
    console.log("Here into BL: Get Matche By Id", req.params.id);
    // let findedMatch = {};
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.params.id) {
    //         findedMatch = matchesTab[i];
    //         break;
    //     }
    // }
    // let findedMatch = matchesTab.find((obj) => { return obj.id == req.params.id; })
    Match.findOne({ _id: req.params.id }).then((doc) => {
        console.log("Here doc", doc);
        res.json({ match: doc });
    })
});

// Business Logic : Delete Matche
app.delete("/api/matches/:id", (req, res) => {
    console.log("Here into BL: Delete Matche", req.params.id);
    // for (let i = 0; i < matchesTab.length; i++) {
    //     let isDeleted = false;
    //     if (matchesTab[i].id == req.params.id) {
    //         matchesTab.splice(i, 1);
    //         isDeleted = true;
    //         break;
    //     }
    // }
    // if (isDeleted) {
    //     res.json({ msg: "Delete ok", tab: matchesTab });
    // } else {
    //     res.json({ msg: "id not exist" });
    // }
    Match.deleteOne({ _id: req.params.id }).then((response) => {
        console.log("Here response after delete", response);
        response.deletedCount ?
            res.json({ msg: "Deleted with success" }) :
            res.json({ msg: "Error" })
    })
});

// Business Logic : Add Matche
app.post("/api/matches", (req, res) => {
    console.log("Here int.o BL: Add Matche", req.body);
    const match = new Match(req.body);
    match.save();
    res.json({ msg: "Added with success" });

    // req.body.id = generateId(matchesTab);
    // matchesTab.push(req.body);
    // res.json({ msg: "Added with success" });
});

// Business Logic : Update Matche
app.put("/api/matches", (req, res) => {
    console.log("Here into BL: Update Matche", req.body);
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == req.body.id) {
    //         matchesTab[i] = req.body;
    //         break;
    //     }
    // }
    // res.json({ isUpdate: true });
    Match.updateOne({ _id: req.body._id }, req.body).then((response) => {
        console.log("Here response after Editing", response);
        response.nModified ?
            res.json({ isUpdated: true }) :
            res.json({ isUpdated: false })
    })
});


function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return max + 1;
}

function verifUniqueEmail(T, email) {
    return T.find((elt) => {
        return elt.email == email;
    })
}

// Business Logic : Signup
app.post("/api/users/signup",multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here int.o BL: Signup", req.body);
    // let findedUser = false;
    // for (let i = 0; i < usersTab.length; i++) {
    //     if (usersTab[i].email == req.body.email) {
    //         findedUser = true;
    //         break;
    //     }
    // }
    // return findedUser;
    // if (findedUser) {
    //     res.json({ msg: "Email Exist" });
    // } else {
    //     req.body.id = generateId(usersTab);
    //     usersTab.push(req.body);
    //     res.json({ msg: "user added with success" });
    // }

    // if (verifUniqueEmail(usersTab, req.body.email)) {
    //     res.json({ msg: "Email Exist" });
    // } else {
    //     req.body.id = generateId(usersTab);
    //     usersTab.push(req.body);
    //     res.json({ msg: "user added with success" });
    // }
    bcrypt.hash(req.body.pwd, 10).then((bcryptedPwd) => {
        console.log("Here is crypted", bcryptedPwd);
        req.body.pwd = bcryptedPwd;
        req.body.avatar=`http://localhost:3000/files/${req.file.filename}`;

        const user = new User(req.body);
        user.save((err, doc) => {
            console.log("here msg",err );
            console.log("here msg",doc );
            if (doc) {
                res.json({ msg: 0 });
            } else {
                if (err.errors.email) {
                    res.json({ msg: 1 });
                }
            }
        });
    });
});
// Business Logic : Get All Users
app.get("/api/users", (req, res) => {
    console.log("Here into BL: Get All Users");
    User.findOne({ email: req.body.email }).then(

        async (findedUser) => {
            let user = findedUser;
            if (!findedUser) {
                res.json({ msg: "0" });
            } else {
                let compare = await bcrypt.compare(req.body.pwd, findedUser.pwd);
                if (!compare) {
                    res.json({ msg: "1" });
                } else {
                    let finalUser = { id: user._id, role: user.role }
                    res.json({ msg: "2", foulan: finalUser });
                }
            }
            // console.log("bcrypt", x);
        });
});


// Business Logic : Login

app.post("/api/users/login", (req, res) => {
    console.log("Here into BL: Login", req.body);
    let user;
    User.findOne({ email: req.body.email })
        .then(
            (doc) => {
                console.log("Here response after search by Email", doc);
                if (!doc) {
                    res.json({ msg: 0 });
                } else {
                    user = doc;
                    // compare PWD xith Crypted PWD
                    return bcrypt.compare(req.body.pwd, doc.pwd);
                }
            })
        .then((compareResult) => {
            console.log("compareResult", compareResult);
            if (!compareResult) {
                res.json({ msg: 1 });
            } else {
                let userToSend = {
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                    id: user._id,
                };
                res.json({ msg: 2 , userToSend: userToSend });
            }
        });

});

// Business Logic : Get Profile By Id
app.get("/api/users/profile/:id", (req, res) => {
    console.log("Here into BL: Get User By Id", req.params.id);
    User.findOne({ _id: req.params.id }).then((doc) => {
        console.log("Here doc", doc);
        res.json({ user: doc });
    })
});

// Business Logic : Update Profile
app.put("/api/users", (req, res) => {
    console.log("Here into BL: Update user", req.body);
    User.updateOne({ _id: req.body._id }, req.body).then((response) => {
        console.log("Here response after Editing", response);
        response.nModified ?
            res.json({ isUpdated: true }) :
            res.json({ isUpdated: false })
    });
});





// Business Logic : IMC
app.post("/api/imc", (req, res) => {
    console.log("Here int.o BL: IMC", req.body);
    let imc = req.body.weight / (req.body.height * 0.0001 * req.body.height);
    if (imc < 16.5) {
        res.json({ msg: "Maigreur extreme dénutrition" });
    } else if (imc >= 16.5 && imc < 18.5) {
        res.json({ msg: "Maigreur" });
    } else if (imc >= 18.5 && imc < 25) {
        res.json({ msg: "Normale" });
    } else {
        res.json({ msg: "obésite" });
    }

});


// Business Logic : Add Team
app.post("/api/teams", (req, res) => {
    console.log("Here int.o BL: Add Team", req.body);
    const team = new Team(req.body);
    team.save((err,doc)=>{
        if (err) {
            res.json({msg : "echec"})
        } else {
            res.status(200).json({ msg: "Added with success" }); 
        }
    });
   
});

// Business Logic : Get All Teams
// app.get("/api/teams", (req, res) => {
//     console.log("Here into BL: Get All Teams");
//     Team.find().then((docs) => {
//         console.log("here documents from teams collection", docs);
//         res.json({ teams: docs })
//     });
// });

// Business Logic : Get All Teams
app.get("/api/teams/populate", (req, res) => {
    console.log("Here into BL: Get All Teams");
    Team.find().populate("players").then(
        (docs) => {
            console.log("Here documents from teams collection", docs);
            res.json({ teams: docs });
        });
});

// Business Logic : Get Team By Id
app.get("/api/teams/:id", (req, res) => {
    console.log("Here into BL: Get Team By Id", req.params.id);
    Team.findOne({ _id: req.params.id }).then((doc) => {
        console.log("Here doc", doc);
        res.json({ team: doc });
    })
});




// Business Logic : Delete Team By Id
app.delete("/api/teams/:id", (req, res) => {
    console.log("Here into BL: Delete Team", req.params.id);
    Team.deleteOne({ _id: req.params.id }).then((response) => {
        console.log("Here response after delete", response);
        response.deletedCount ?
            res.json({ msg: "Deleted with success" }) :
            res.json({ msg: "Error" })
    })
});

// Business Logic : Update Team
app.put("/api/teams", (req, res) => {
    console.log("Here into BL: Update Team", req.body);
    Team.updateOne({ _id: req.body._id }, req.body).then((response) => {
        console.log("Here response after Editing", response);
        response.nModified ?
            res.json({ isUpdated: true }) :
            res.json({ isUpdated: false })
    });
});

// Business Logic : Add Player
// app.post("/api/players",multer({ storage: storageConfig }).single('img'), (req, res) => {
//     // Team.findById(req.body.team_id).then((team) => {
//     //     if (!team) {
//     //         res.status(500).json({ msg: "team notfind" });
//     //     } else {
//             req.body.avatar=`http://localhost:3000/files/${req.file.filename}`;
//             const player = new Player(req.body);
//             player.save();
           
//             // team.players.push(player)
//             // team.save()
//             res.status(200).json({ msg: "Added with success" });
//     //     }
//     // });
// });




// Business Logic : Add Player
app.post("/api/players", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("Here into BL: Add Player", req.body);

    try {
        Team.findById(req.body.tId).then((team) => {
            if (!team) {
                return res.status(404).json({ message: "Team not found" });
            }
            const player = new Player({
                name: req.body.name,
                nbr: req.body.nbr,
                position: req.body.position,
                teamId: team._id,
            });
            player.save((err, doc) => {
                if (doc) {
                    team.players.push(player);
                    team.save();
                    res.status(201).json({ message: "Success" });
                }

            });
        });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error creating player", error: error.message });
    }



    // req.body.avatar = `http://localhost:3000/files/${req.file.filename}`;
    // const player = new Player(req.body);
    // player.save((err,doc)=>{
    //     if (doc) {
    //         res.json({msg: "Added with Success"});  
    //     } else {
    //         res.json({msg: "Error"}); 
    //     }
    // });

});

// Business Logic : Get All Players
app.get("/api/players", (req, res) => {
    console.log("Here into BL: Get All Players");
    Player.find().populate({ path: 'team_id', select: 'name' }).then((docs) => {
        console.log("here documents from players 0collection", docs);
        res.status(200).json({ players: docs })
    });
});


// Business Logic : Get All Team players (teamId)
app.post("/api/searchTeamPlayers", (req, res) => {
    console.log("Here into BL: Get All Team Players", req.body);
    try {
        Team.findById(req.body.tId).populate("players").then((team) => {
            console.log("Here founded team", team);
            res.json({ team: team });
        });
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ msg: error });
    }
});

// Business Logic : Get Player By Id
app.get("/api/players/:id", (req, res) => {
    console.log("Here into BL: Get player By Id", req.params.id);
    Player.findOne({ _id: req.params.id }).then((doc) => {
        console.log("Here doc", doc);
        res.json({ player: doc });
    })
});

// Business Logic : Delete Player By Id
app.delete("/api/players/:id", (req, res) => {
    console.log("Here into BL: Delete Player", req.params.id);
    Player.deleteOne({ _id: req.params.id }).then((response) => {
        console.log("Here response after delete", response);
        response.deletedCount ?
            res.json({ msg: "Deleted with success" }) :
            res.json({ msg: "Error" })
    });
});

// Business Logic : Update Player
app.put("/api/players", (req, res) => {
    console.log("Here into BL: Update Player", req.body);
    Player.updateOne({ _id: req.body._id }, req.body).then((response) => {
        console.log("Here response after Editing", response);
        response.nModified ?
            res.json({ isUpdated: true }) :
            res.json({ isUpdated: false })
    });
});

// Business Logic : Add Stadium
app.post("/api/stadium", (req, res) => {
    console.log("Here int.o BL: Add Stadium", req.body);
    const stadium = new Stadium(req.body);
    stadium.save((err, doc) => {
        if (err) {
            res.json({ msg: "Echec" });
        } else {
            res.status(200).json({ msg: "Added with success" });
        }
    });

});

// Business Logic : Get All Stadiums
app.get("/api/stadium", (req, res) => {

    // Team.find().then((docs) => {
    //     console.log("here documents from teams collection", docs);
    //     res.status(200).json({ teams: docs })
    // });

    console.log("Here into BL: Get All Stadiums");
    Stadium.find().populate("team_id").then(
        (docs) => {
            console.log("Here documents from Stadiums collection", docs);
            res.json({ stadiums: docs });
        });
});

// function weatherApi() {
//     axios.get("https://api.openweathermap.org/data/2.5/weather?lat=36.74&lon=10.14&appid=db4d7b7e06bef294fc84280af375b5a4").then((res) => { console.log(res); }).catch((err) => { console.log(err); })
// }
// weatherApi();

//make app importable from another files

// Business Logic : test 



module.exports = app;

