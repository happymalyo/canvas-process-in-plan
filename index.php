<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link href="./css/style.css" rel="stylesheet" />
    <title>Document</title>
</head>
<body>
    <h1>Canvas et PHP</h1>
    <a href="polygone.php">Les polygones</a>
    <div class="container col-12 p-0 m-0">
        <div class="d-flex">
            <div class="col-3 mx-2">
                <div class="card">
                    <div class="card-body">
                        <!--  -->
                        <h4 class="card-title">Pannelle</h4>

                        <div class="mb-3">
                            <label for="formPlanFile" class="form-label">Veuillez sélectionner un plan</label>
                            <input class="form-control" type="file" id="formPlanFile">
                        </div>

                        <p>
                            <h5>Les outils</h5>
                        </p>
                        <p>Emplacement des ICPE</p>
                        <div class="d-flex">
                            <!-- Liste des bouttons emplacement ICPE -->
                            <div class="col-2">
                                <input type="checkbox" class="btn-check" id="btn-check-circle-outlined" autocomplete="off">
                                <label class="btn btn-outline-success" for="btn-check-circle-outlined"><i class="fa-regular fa-circle"></i></label><br>
                            </div>
                            <!-- Fin liste des bouttons emplacement ICPE -->

                            <!-- Label des boutons -->
                            <div>
                            <input type="text" class="form-control" id="labelInputICPE">
                            </div>
                        </div>

                        <div class="mt-4">
                            <P>Autres outils</P>
                            <div>
                                <div class="col-2">
                                    <input type="checkbox" class="btn-check" id="btn-check-warehouse-outlined" autocomplete="off">
                                    <label class="btn btn-outline-primary" for="btn-check-warehouse-outlined"><i class="fa-solid fa-warehouse"></i></label><br>
                                </div>
                            </div>
                        </div>

                        <p id="listCoordonne"></p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary">Enregistrer</button>
                        <button class="btn btn-secondary" id="annuler">Annuler</button>
                    </div>
                </div>
            </div>
            
            <div class="col-10">
                <canvas id="canvasPlan" style="cursor:crosshair;"></canvas>
                <p id="coordText"></p>
            </div>
        </div>
    </div>
    <script src="./js/main.js"></script>
</body>
</html>