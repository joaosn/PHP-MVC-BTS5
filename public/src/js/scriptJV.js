var jv = {
    //return zero caso vazio
    zero: function(val) {
        return (val) ? val : 0;
    },
    
    BRL: function(val) {
        return Intl.NumberFormat('pt-br', { currency: 'BRL', minimumFractionDigits: 2 }).format(val)
    },

    USA: function(val) {
        if (val === 0) {
            return val;
        }
        return parseFloat(val.split(".").join("").replace(",", "."));
    },

    injectqs: function(html, el) {
        document.querySelector('.' + el).innerHTML = html;
    },

    injecthtml: function(html, el) {
        document.getElementById(el).innerHTML = html;
    },


    isvalid: function(item) {
        for (let x in item) {
            let i = jv.qs(item[x]);
            if (!i) {
                return Swal.fire(
                    'Ops ....!',
                    'Parece que esse Campo esta Vazio!<hr><br>Campo: <u><b>' + item[x] + '</b></u>',
                    'warning'
                ), false
            }
        }
        return true;
    },
    isvalid2: function(item) {
        for (let x in item) {
            if (!item[x]) {
                return Swal.fire(
                    'Ops ....!',
                    'Parece que esse Campo esta Vazio!<hr><br>Campo: <u><b>' + x + '</b></u>',
                    'warning'
                ), false
            }
        }
        return true;
    },

    insert: function(el, val) {
        return document.querySelector('.' + el).value = val;
    },

    suporte: function() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Oops Desculpe algo não saiu como planejado Contate o suporte Tecnico!',
        })
    },

    datatable: function(dd) { //recebe array de idsClass para ponha datatable 
        for (let x = 0; x < dd.length; x++) {
            $('#' + dd[x]).DataTable({
                "language": {
                    "sEmptyTable": "Nenhum registro encontrado",
                    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                    "sInfoThousands": ".",
                    "sLengthMenu": "_MENU_ resultados por página",
                    "sLoadingRecords": "Carregando...",
                    "sProcessing": "Processando...",
                    "sZeroRecords": "Nenhum registro encontrado",
                    "sSearch": "Pesquisar",
                    "oPaginate": {
                        "sNext": "Próximo",
                        "sPrevious": "Anterior",
                        "sFirst": "Primeiro",
                        "sLast": "Último"
                    },
                    "oAria": {
                        "sSortAscending": ": Ordenar colunas de forma ascendente",
                        "sSortDescending": ": Ordenar colunas de forma descendente"
                    },
                    "select": {
                        "rows": {
                            "_": "Selecionado %d linhas",
                            "0": "Nenhuma linha selecionada",
                            "1": "Selecionado 1 linha"
                        }
                    },
                    "buttons": {
                        "copy": "Copiar",
                        "copyTitle": "Cópia bem sucedida",
                        "copySuccess": {
                            "1": "Uma linha copiada com sucesso",
                            "_": "%d linhas copiadas com sucesso"
                        }
                    },
                },
                dom: 'Bfrtip',
                buttons: [
                    { extend: 'copy', className: 'btn btn-success btn-fill ' },
                    { extend: 'csv', className: 'btn btn-primary btn-fill' },
                    { extend: 'excel', className: 'btn btn-success btn-fill' },
                    { extend: 'pdf', className: 'btn btn-success btn-fill' },
                    { extend: 'print', className: 'btn btn-success btn-fill' },
                ]
            });
        }

    },

    datatable2: function(dd) { //recebe array de Class para ponha datatable 
        for (let x = 0; x < dd.length; x++) {
            $('.' + dd[x]).DataTable({
                "language": {
                    "sEmptyTable": "Nenhum registro encontrado",
                    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                    "sInfoThousands": ".",
                    "sLengthMenu": "_MENU_ resultados por página",
                    "sLoadingRecords": "Carregando...",
                    "sProcessing": "Processando...",
                    "sZeroRecords": "Nenhum registro encontrado",
                    "sSearch": "Pesquisar",
                    "oPaginate": {
                        "sNext": "Próximo",
                        "sPrevious": "Anterior",
                        "sFirst": "Primeiro",
                        "sLast": "Último"
                    },
                    "oAria": {
                        "sSortAscending": ": Ordenar colunas de forma ascendente",
                        "sSortDescending": ": Ordenar colunas de forma descendente"
                    },
                    "select": {
                        "rows": {
                            "_": "Selecionado %d linhas",
                            "0": "Nenhuma linha selecionada",
                            "1": "Selecionado 1 linha"
                        }
                    },
                    "buttons": {
                        "copy": "Copiar",
                        "copyTitle": "Cópia bem sucedida",
                        "copySuccess": {
                            "1": "Uma linha copiada com sucesso",
                            "_": "%d linhas copiadas com sucesso"
                        }
                    },
                },
            });
        }

    },

    maskDim: function(mas) { //recebe array de class para ponhar mask de dinheiro
        for (let x in mas) {
            let dim = '.' + mas[x];
            VMasker(document.querySelector(dim)).maskMoney();
        }
    },

    qsAll: function(parms) {
        return document.querySelectorAll('.' + parms);
    },

    qs: function(parms) {
        return document.querySelector('.' + parms).value;
    },

    qsc: function(parms) {
        return (this.qss(parms).checked) ? this.qs(parms) : null;
    },

    qss: function(parms) {
        return document.querySelector('.' + parms);
    },

    qsf: function(parms) {
        return document.querySelector('.' + parms).files[0];
    },

    byIdSoma: function(parms) {
        let res = document.getElementById(parms).value;
        return (res) ? res : 0;
    },

    isvalidTeF: function(item) {
        for (let x in item) {
            if (!item[x]) {
                return false;
            }
        }
        return true;
    },
    ID: function() {
        // Math.random deve ser único por causa de seu algoritmo de propagação.
        // Converta para a base 36 (números + letras) e pegue os primeiros 9 caracteres
        // após o decimal.
        return Date.now().toString(36).substr(2, 9);

    },
    byID: function(parm, res) {
        if (res) {
            return document.getElementById(parm).value;
        } else {
            return document.getElementById(parm);
        }


    },
    limpaFormdata: function(items) {
        items.forEach(function(val, key, fD) {
            // here you can add filtering conditions
            items.delete(key);
        });
    },
    formData: function(args) { //recebe json
        var data = new FormData();

        for (let x in args) {
            if (args.hasOwnProperty(x)) {
                data.append(x, args[x]);
            } else {
                data.append(x, args[x]);
            }
        }
        return data;
    },
    fmCPF: function(cpf) {
        $("." + cpf).inputmask({
            mask: ['999.999.999-99', '99.999.999/9999-99'],
            keepStatic: true
        });
    },
    fmcell: function(cell) {
        $("." + cell).inputmask("(99) 9 99999999");
    },
    ajax: async function(method, parms, url) {
        if (method == 'POST') {
            if (parms) {
                var req = await fetch(base + url, {
                    method: method,
                    header: new Headers({ 'Content-Type': 'application/json' }),
                    body: parms
                });
            } else {
                var req = await fetch(base + url, {
                    method: method,
                    header: new Headers({ 'Content-Type': 'application/json' }),
                });
            }
            let res = await req.json();
            return res;
        } else {
            if (parms) {
                var req = await fetch(base + url + new URLSearchParams({
                    parms
                }))
            } else {
                var req = await fetch(base + url);
            }

            let res = await req.json();
            return res;
        }

    }

}