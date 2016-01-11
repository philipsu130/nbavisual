import os
import time
import requests
from lxml import html
from flask import Flask, render_template, request, jsonify


app = Flask(__name__)
url = "http://www.nba.com/gameline/"

@app.route('/matchups')
def matchups():
	matchups = {}
	date = request.args.get('date', '0', type=str)
	url_with_date = str(url) + str(date)
	page = requests.get(url_with_date)
	tree = html.fromstring(page.content)
	matchups_nba = tree.xpath('//div[contains(@class, "nbaTeamsRow")]//img//@title')
	i = 0
	while i < len(matchups_nba):
		print matchups_nba[i]
		away_team = matchups_nba[i].split()
		if away_team[0] == 'Portland':
			away_team = away_team[1] + away_team[2]
		elif away_team[0] == 'Philadelphia':
			away_team = 'Sixers'
		else:
			away_team = away_team[-1]
		home_team = matchups_nba[i+1].split()
		if home_team[0] == 'Portland':
			home_team = home_team[1] + home_team[2]
		elif home_team[0] == 'Philadelphia':
			home_team = 'Sixers'
		else:
			home_team = home_team[-1]
		matchups[home_team] = away_team
		i += 2
	return jsonify(**matchups)

@app.route('/')
def index():
	return render_template('index.html')

if __name__ == "__main__":
	app.debug = True
	app.run()