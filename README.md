# Rocket-League-Mafia-Bot

## How it works
Mafia is very simple. Minimum of four players or 2v2 required. One of the players is mafia and their goal is to sabotage their team. But wait! There's more! 
<br/>
At the end of the round a vote is taken on who the players think is mafia. If the majority of the players vote on the person who is mafia, the players win and the person who is mafia loses.
If the players choose someone other than the person who is mafia, regardless of who won the round, the mafia player wins, everyone else loses.

## Commands
This bot is set up to require very minimal input. 
<br/>
Type !see mafia in chat and the bot will add a message to whatever text channel you're in. The players respond to the bot with any emoji.
<b3/> 
After 30 seconds, each player gets a DM with their role which is either mafia, or not mafia. Then the game begins. Nothing else is needed, just use the command again to set up another game.

## How to deploy with Docker
Navigate to directory that source code is in
<br/>
Run the commands below to build the container and then run
<br/>
docker build -t mafia.bot .
<br/>
docker run -d --restart unless-stopped mafia.bot
<br/>
Now you should be able to run "docker ps" and you should see your application running. In this circumstance we're using "-d --restart unless-stopped" to allow for the application to continue to run in the event it crashes or the connection is timed out. 



