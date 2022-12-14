from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/parks")
def parks():
    data_file = pd.read_csv("./Resources/cleaned_park.csv")
    data = data_file.to_json(orient="records")
    return render_template("Parks.html", data=data)


@app.route("/species")
def species():
    return render_template("Species.html")

if __name__ == "__main__":
    app.run(debug=True)