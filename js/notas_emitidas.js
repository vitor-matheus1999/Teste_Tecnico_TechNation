
let filtro = {
    'tipoFiltro':'',
    'valorTipoFiltro':''
}

let dadosJson = [{'id':'1','nome_pagador':'João Carvalho','documento_nota_fiscal':'123.456.789-12','documento_boleto_bancario':'123.456.789-12','data_emissao_nota':'10/05/2023','data_cobranca_nota':'11/05/2023','data_pagamento_nota':'11/05/2023','status_nota':'4'},{'id':'2','nome_pagador':'Ana Julia Tomas','documento_nota_fiscal':'123.456.789-12','documento_boleto_bancario':'123.456.789-12','data_emissao_nota':'20/02/2023','data_cobranca_nota':'21/02/2023','data_pagamento_nota':'26/02/2023','status_nota':'3'},{'id':'3','nome_pagador':'Valdemar Santos','documento_nota_fiscal':'123.456.789-12','documento_boleto_bancario':'123.456.789-12','data_emissao_nota':'10/10/2023','data_cobranca_nota':'12/10/2023','data_pagamento_nota':'-','status_nota':'2'}]


$(document).ready((e)=>{
    let tableNotasEmitidas = $('#tb_notas_emitidas').DataTable({
        // ajax:{
        //     url:"", // Url que fara a conexão com a API requisitada
        //     type:'post',
        //     data:filtro,
        //     dataSrc:'',
        //     dataType:'json'
        // },
        dom:'Pfrtip',
        data:dadosJson,
        columns:[
            {
                data:'id',
                title:'#'
            },
            {
                data:'nome_pagador',
                title:'Nome do Pagador'
            },
            {
                data:'documento_nota_fiscal',
                title:'Documento vinculado à nota fiscal'
            },
            {
                data:'documento_boleto_bancario',
                title:'Documento vinculado ao boleto bancário'
            },
            {
                data:'data_emissao_nota',
                title:'Data de Emissão'
            },
            {
                data:'data_cobranca_nota',
                title:'Data de Cobrança'
            },
            {
                data:'data_pagamento_nota',
                title:'Data de Pagamento'
            },
            {
                data:'status_nota',
                title:'Status',
                render:function(data,type){
                    let status = '';
                    switch(data){
                        case '1':
                            status = '<span class="badge badge-primary">Emitida</span>'
                            break
                        case '2':
                            status = '<span class="badge badge-warning"> Cobrança realizada</span>'
                            break
                        case '3':
                            status = '<span class="badge badge-danger">Pagamento em atraso</span>'
                            break
                        case '4':
                            status = '<span class="badge badge-success">Pagamento realizado</span>'
                            break
                    }
                    return status;
                }
            }
        ],
        columnDefs:[
            {
                className: "text-center",
                targets: "_all",
            }
        ],
    });

    $('#selectFiltro').on('change', (e)=>{
        let tipo_filtro = $('#selectFiltro').val();
    
       if(tipo_filtro == 1 || tipo_filtro == 2 || tipo_filtro == 3){
            $('#selectMes').removeClass('d-none');
       }else{
            $('#selectMes').addClass('d-none');
       }
    
       if(tipo_filtro == 4){
            $('#selectStatus').removeClass('d-none');
       }else{
            $('#selectStatus').addClass('d-none');
       }
    });

    $('#selectMes').on('change',(e)=>{
        let tipo_filtro = $('#selectFiltro').val();
        let mes = $('#selectMes').val(); 
    
        filtro.tipoFiltro = tipo_filtro;
        filtro.valorTipoFiltro = mes;

        tableNotasEmitidas.ajax.reload();
    });

    $('#selectStatus').on('change',(e)=>{
        let status = $('#selectStatus').val();
        switch(status){
            case '1':
                // dadosJson.forEach((e)=>{
                //     if(e.status_nota != 1){
                        
                //     }
                // })

                for(var i = 0; i <= dadosJson.length; i++){
                    
                    
                }

                console.log(dadosJson.status_nota)
                break
            case '2':
                status = '<span class="badge badge-warning"> Cobrança realizada</span>'
                break
            case '3':
                status = '<span class="badge badge-danger">Pagamento em atraso</span>'
                break
            case '4':
                status = '<span class="badge badge-success">Pagamento realizado</span>'
                break
        }
    });


    // Métodos para utilização de filtro caso fosse usado ajax
    // $('#selectMes').on('change',(e)=>{
    //     let tipo_filtro = $('#selectFiltro').val();
    //     let mes = $('#selectMes').val(); 
    
    //     filtro.tipoFiltro = tipo_filtro;
    //     filtro.valorTipoFiltro = mes;

    //     tableNotasEmitidas.ajax.reload();
    // });
    
    // $('#selectStatus').on('change',(e)=>{
    //     let tipo_filtro = $('#selectFiltro').val();
    //     let status = $('#selectStatus').val();

    //     filtro.tipoFiltro = tipo_filtro;
    //     filtro.valorTipoFiltro = status;

    //     tableNotasEmitidas.ajax.reload();
    // });
});



