<?php

// database connection credentials
$servername = "localhost";
$username = "root";
$password = "lastborn231";
$dbname = "test1_db";

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// JSON data
$json_data = '{
  "records": [
    {
      "CompanyName": "Alfreds Futterkiste",
      "City": "Berlin",
      "Country": "Germany"
    },
    {
      "CompanyName": "Ana Trujillo Emparedados y helados",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "CompanyName": "Antonio Moreno Taquería",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "CompanyName": "Around the Horn",
      "City": "London",
      "Country": "UK"
    },
    {
      "CompanyName": "B\'s Beverages",
      "City": "London",
      "Country": "UK"
    },
    {
      "CompanyName": "Berglunds snabbköp",
      "City": "Luleå",
      "Country": "Sweden"
    },
    {
      "CompanyName": "Blauer See Delikatessen",
      "City": "Mannheim",
      "Country": "Germany"
    },
    {
      "CompanyName": "Blondel père et fils",
      "City": "Strasbourg",
      "Country": "France"
    },
    {
      "CompanyName": "Bólido Comidas preparadas",
      "City": "Madrid",
      "Country": "Spain"
    },
    {
      "CompanyName": "Bon app\'",
      "City": "Marseille",
      "Country": "France"
    },
    {
      "CompanyName": "Bottom-Dollar Marketse",
      "City": "Tsawassen",
      "Country": "Canada"
    },
    {
      "CompanyName": "Cactus Comidas para llevar",
      "City": "Buenos Aires",
      "Country": "Argentina"
    },
    {
      "CompanyName": "Centro comercial Moctezuma",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "CompanyName": "Chop-suey Chinese",
      "City": "Bern",
      "Country": "Switzerland"
    },
    {
      "CompanyName": "Comércio Mineiro",
      "City": "São Paulo",
      "Country": "Brazil"
    }
  ]
}';

// decode JSON data into PHP array
$data_array = json_decode($json_data, true);

// insert each record into the database
foreach ($data_array['records'] as $record) {
    $sql = "INSERT INTO companies (CompanyName, city, country) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $record['CompanyName'], $record['City'], $record['Country']);
    $stmt->execute();
}

// close connection
$conn->close();

?>
