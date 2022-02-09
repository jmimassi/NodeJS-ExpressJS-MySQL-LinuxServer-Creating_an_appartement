let Room = require("../models/roomModel");

let listepiece =[]

listecalcul = []

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'exam'
});
    connection.connect(function(error) {if (error) console.log(error); });  

exports.apartList = function(req, res){
    res.render('apartList.ejs')
}

exports.enregistrer = function(req, res){
    let piece = req.body.piece;

    let largeur = req.body.largeur;

    let longueur = req.body.longueur;

    let room = new Room(piece, largeur, longueur);

    let calcul = largeur*longueur;
    listecalcul.push(calcul);
    console.log(listecalcul)

    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    let calcultot = listecalcul.reduce(reducer);


    listepiece.push(room);

    let piecedb = {"name": piece, "length":longueur, "width":largeur}
    connection.query("INSERT INTO room SET ?", piecedb, function(err,result){
        if (err) console.log(err)
    });
    

    res.render("enregister.ejs", {listepiece : listepiece, calcul : calcul, calcultot : calcultot})
}

exports.retour = function(req, res){
    calculer = ""
    res.render('apartListifretour.ejs' , {calculer:calculer})
}
exports.calcul= function(req, res){
    let largeur = req.body.largeur;

    let longueur = req.body.longueur;

    let calculer = "Surface total : " + longueur*largeur +" m2" ;
    res.render('apartListifretour.ejs' , {calculer:calculer})
}