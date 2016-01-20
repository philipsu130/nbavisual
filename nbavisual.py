import os
import time
import requests
from lxml import html
from flask import Flask, render_template, request, jsonify


app = Flask(__name__)
matchup_url = "http://www.nba.com/gameline/"
team_stats_url = "http://www.nba.com/standings/team_record_comparison/conferenceNew_Std_Div.html?ls=iref:nbahpstand"
#team_name_dict = {
#	'Atlanta' : 'Hawks',
#	'Boston' : 'Celtics',
#
#	'Hawks': '#e13a3e',
#			'Celtics': '#008348',
#			'Hornets': '#1d1160',
#			'Bulls': '#ce1141',
#			'Cavaliers': '#860038',
#			'Mavericks': '#007dc5',
#			'Nuggets': '#4d90cd',
#			'Pistons': '#ed174c',
#			'Warriors': '#fdb927',
#			'Rockets': '#ce1141',
#			'Pacers': '#ffc633',
#			'Clippers': '#ed174c',
#			'Lakers': '#fdb927',
#			'Grizzlies': '#0f586c',
#			'Heat': '#98002e',
#			'Bucks': '#00471b',
#			'Timberwolves': '#005083',
#			'Nets': '#061922',
#			'Pelicans': '#b4975a',
#			'Knicks': '#f58426',
#			'Thunder': '#007dc3',
#			'Magic': '#007dc5',
#			'Sixers': '#c4ced3',
#			'Suns': '#e57020',
#			'TrailBlazers': '#e03a3e',
#			'Kings': '#724c9f', 
#			'Spurs': '#061922',
#			'Raptors': '#ce1141',
#			'Jazz': '#00471b',
#			'Wizards': '#e31837',
#}

@app.route('/matchups')
def matchups():
	matchups = {}
	# Scrape matchups on a given date
	date = request.args.get('date', '0', type=str)
	url_with_date = str(matchup_url) + str(20160103)
	page = requests.get(url_with_date)
	tree = html.fromstring(page.content)
	matchups_nba = tree.xpath('//div[contains(@class, "nbaTeamsRow")]//img//@title')
	tree.xpath('//td[contains(@class, "team-name")]//a')
	i = 0
	while i < len(matchups_nba):
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
	team_stats = {}
	# Scrape team stats data
	page = requests.get(team_stats_url)
	tree = html.fromstring(page.content)
	team_locations = tree.xpath('//table[contains(@class, "mainStandings")]//td[contains(@class, "team")]//a/text()')
	
#	for element in team_stats_elements:
		
	return render_template('index.html', team_stats=team_stats)

if __name__ == "__main__":
	app.debug = True
	app.run()