<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{ background-color: ivory; }
        #canvas{border:1px solid red;}
    </style>
</head>
<body> 
    <h4>Click to assign polygon vertices</h4>
    <a href="index.php">Accueil</a>
    <button id=done>Click when done assigning points</button>
    <br><canvas id="canvas" width=300 height=300></canvas>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="./js/polygone.js"></script>
</body>
</html>