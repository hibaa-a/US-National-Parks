from flask import Flask, render_template, jsonify 
import pandas as pd

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/parks_pict")
def parks_pict():
    return render_template("index.html")

@app.route("/species_pict")
def species_pict():

    return render_template("index.html")

@app.route("/parks")
def parks():
    data_file = pd.read_csv("./Resources/cleaned_park.csv")
    data = data_file.to_json(orient="records")
    return render_template("Parks.html", data=data)

@app.route("/parks2")
def parks2():
    data_file = pd.read_csv("./Resources/cleaned_park.csv")
    data = data_file.to_json(orient="records")
    return jsonify(data)

@app.route("/species")
def species():
    data_file_species = pd.read_csv("./Resources/cleaned_species.csv")
    data_species = data_file_species.to_json(orient="records")
    return render_template("Species.html", data=data_species)

if __name__ == "__main__":
    app.run(debug=True)