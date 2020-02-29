const fs = require('fs');

let generateReport = (data) => {

	let template = `<!doctype html>
					<html>
						<head>
							<title>Exception Report</title>
							<style>
								table {
									width: 90%;
									margin: 0 auto;
									border-collapse: collapse;
								}
								th, td {
									border: 1px solid black;
									padding: 10px;
								}
								table tr:nth-child(even){
									background-color: #f2f2f2;
								}
								table tr:hover {
									background-color: #ddd;
								}
								table th {
								  padding-top: 12px;
								  padding-bottom: 12px;
								  text-align: left;
								  background-color: #4CAF50;
								  color: white;
								}
								.summary {
									width: 90%;
									margin: 0 auto;
								}
							</style>
						</head>
						<body>
							<div style="display:none" id="showTable">
								<div class="summary">
									<h3 id="reportedExceptions"></h3>
								</div>
								<table id="table">
									<tr>
										<th width="20%">Index</th>
										<th width="80%">Exception</th>
									</tr>
									<tr></tr>
								</table>
							</div>
							<h2 id="noData" class="summary"></h2>
							<script>
								let tableData = ${data};
								let tableDataLength =  ${JSON.parse(data).length};
								document.getElementById("reportedExceptions").innerHTML = "Total Exceptions Reported is " + tableDataLength;
								if(tableDataLength > 0) {
									document.getElementById("showTable").style.display = 'block';
									let table = document.getElementById("table");
								    for (var i = 0; i < tableDataLength; i++) {
								        let row = table.insertRow(i + 1);
								        let cells = Object.keys(tableData[i]);
								        for (var j = 0; j < cells.length; j++) {
							                let cell = row.insertCell(j);
							                cell.innerHTML = tableData[i][cells[j]];
								        }
								    }
								} else {
									document.getElementById("noData").innerHTML = 'No Exceptions Found';
								}
							</script>
						</body>
					</html>`;
	fs.writeFileSync('./reports/exception_report.html', template);
}


module.exports = generateReport;