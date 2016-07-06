angular.module("sistema")
    .config(routes);

function routes($routeProvider) {
    $routeProvider.otherwise({ redirectTo: "/" });

    $routeProvider.when("/", {
        templateUrl: "views/paginaInicial.html",
        controller: "sistemaController"
    });
    $routeProvider.when("/pessoas/listagem", {
        templateUrl: "views/listagemPessoas.html",
        controller: "pessoasController"
    });
    $routeProvider.when("/pessoas/cadastro", {
        templateUrl: "views/cadastroPessoas.html",
        controller: "pessoasController"
    });


}