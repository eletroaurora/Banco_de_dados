                                                    // FUNÇÃO DE EXPORTAÇÃO DE DADOS
                                                    var $table = $('#table');
                                                    $(function () {
                                                        $('#toolbar').find('select').change(function () {
                                                            $table.bootstrapTable('refreshOptions', {
                                                                exportDataType: $(this).val()
                                                            });
                                                        });
                                                    })

                                                    var trBoldBlue = $("table");

                                                    $(trBoldBlue).on("click", "tr", function () {
                                                        $(this).toggleClass("bold-blue");
                                                        if ($(this).toggleClass("bold-blue")) {
                                                            function executaAcao() {
                                                                alert("Eu vou para o Google");
                                                                window.location = "http://google.com";
                                                            }
                                                        }
                                                    });

                                                    //ESCONDER O RELATORIO;
                                                    $("#relatorio_geral").hide();
 //ESCONDER O RELATORIO;
 function apagar_relatorios(){
 $("#relatorio_geral").hide();
 }
                                                    // FUNÇÃO PRINCIPAL DO SISTEMA (EM CONSTANTE EVOLUÇÃO);
function gerar_relatorios() {
    //MOSTRAR O RELATORIO
    $("#relatorio_geral").show();
    //ALGORITMO PARA DEFINIR A QTD DE CLIENTES
    var tabela = document.getElementById('table');
    var linhas = tabela.getElementsByTagName('tr');
    var resultado = linhas.length - 1;
    document.getElementById("clientes_relatorio").textContent = resultado;

        //ALGORITMO PARA DEFINIR A POTENCIA
    let tdsValores_potencia = document.querySelectorAll('#potencia')

    let total_potencia = 0

    for (let i = 0; i < tdsValores_potencia.length; i++) {

        let valor_potencia = parseFloat(tdsValores_potencia[i].textContent)


        total_potencia = total_potencia + valor_potencia
    }
    document.getElementById("potencia_relatorio").textContent = total_potencia;


    //ALGORITMO PARA DEFINIR A QTD DE MODULOS
    let tdsValores_modulos = document.querySelectorAll('#qtd_modulos')

    let total_modulos = 0

    for (let i = 0; i < tdsValores_modulos.length; i++) {

        let valor_modulos = parseFloat(tdsValores_modulos[i].textContent)


        total_modulos = total_modulos + valor_modulos
    }
    document.getElementById("modulos_relatorio").textContent = total_modulos;


    //ALGORITMO PARA DEFINIR A QTD DE INVERSORES
    let tdsValores_inversores = document.querySelectorAll('#qtd_inversores')

    let total_inversores = 0

    for (let i = 0; i < tdsValores_inversores.length; i++) {

        let valor_inverores = parseFloat(tdsValores_inversores[i].textContent)


        total_inversores = total_inversores + valor_inverores
    }
    document.getElementById("inversores_relatorio").textContent = total_inversores;


    //ALGORITMO PARA DEFINIR A QTD DE MICRO-INVERSORES
    let tdsValores_micro_inversores = document.querySelectorAll('#qtd_micro_inversores')

    let total_micro_inversores = 0

    for (let i = 0; i < tdsValores_micro_inversores.length; i++) {

        let valor_micro_inverores = parseFloat(tdsValores_micro_inversores[i].textContent)


        total_micro_inversores = total_micro_inversores + valor_micro_inverores
    }
    document.getElementById("micro_inversores_relatorio").textContent = total_micro_inversores;


    //ALGORITMO PARA DEFINIR A QTD DE SOLAR EDGE
    let tdsValores_solar = document.querySelectorAll('#qtd_solar_edge')

    let total_solar = 0

    for (let i = 0; i < tdsValores_solar.length; i++) {

        let valor_solar = parseFloat(tdsValores_solar[i].textContent)


        total_solar = total_solar + valor_solar
    }
    document.getElementById("solar_edge_relatorio").textContent = total_solar;


    //ALGORITMO PARA DEFINIR O VALOR DO PEDIDO
    let tdsValores_pedido = document.querySelectorAll('#qtd_valor')

    let total_pedido = 0

    for (let i = 0; i < tdsValores_pedido.length; i++) {

        let valor_pedido = parseFloat(tdsValores_pedido[i].textContent)


        total_pedido = total_pedido + valor_pedido
    }
    document.getElementById("qtd_valor_relatorio").textContent = total_pedido;



    var d1 = document.getElementById('compra').textContent;
    console.log(d1);
    var d2 = document.getElementById('chegada').textContent;

    var diff = moment(d2, "DD/MM/YYYY HH:mm:ss").diff(moment(d1, "DD/MM/YYYY HH:mm:ss"));

    var dias = moment.duration(diff).asDays();

    document.getElementById("e1").textContent = dias;
    console.log("resultado " + dias);
}