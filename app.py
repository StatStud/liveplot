from flask import Flask, render_template
import plotly
import plotly.graph_objs as go
from model import Hydro

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
