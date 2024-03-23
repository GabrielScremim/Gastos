// Função para carregar a API do Google Sheets
function initClient() {
    gapi.client.init({
        'apiKey': 'SUA_CHAVE_DE_API_DO_GOOGLE',
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        console.log('Google Sheets API loaded');
    });
}

// Função para adicionar um gasto à planilha do Google
function adicionarGasto() {
    var valor = document.getElementById("valor").value;
    var descricao = document.getElementById("descricao").value;

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: '1YdnxYSjivRvtbM1pZFhKgfT8ShRqfltKG4_SPU1rf-s',
        range: 'A2:B2',
        valueInputOption: 'RAW',
        resource: {
            values: [[valor, descricao]]
        }
    }).then(function(response) {
        console.log('Gasto adicionado com sucesso:', response);
    }, function(reason) {
        console.error('Erro ao adicionar gasto:', reason.result.error.message);
    });
}

// Inicialização da API do Google Sheets
gapi.load('client', initClient);
