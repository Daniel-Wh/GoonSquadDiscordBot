# Goon Squad Discord Bot

## How it works
Jester is an optional role for Among Us games. Essentially, a random person is selected to be Jester and that person's role is to appear as an Impostor. 
<br/>
At the end of the round a vote is taken on who the players think is Jester. If the majority of the players vote on the person who is Jester, the players win and the person who is Jester loses.
If the players choose someone other than the person who is Jester, regardless of who won the round, the Jester player wins, everyone else loses.

## Commands
This bot is set up to require very minimal input. 
<br/>
Type !goon jester in chat and the bot will add a message to whatever text channel you're in. The players respond to the bot with any emoji.
<b3/> 
After 30 seconds, each player gets a DM with their role which is either jester, or not jester. Then the game begins. Nothing else is needed, just use the command again to set up another game.

## How to deploy with Docker
Navigate to directory that source code is in
<br/>
Run the commands below to build the container and then run
<br/>
docker build -t jester.bot .
<br/>
docker run -d --restart unless-stopped jester.bot
<br/>
Now you should be able to run "docker ps" and you should see your application running. In this circumstance we're using "-d --restart unless-stopped" to allow for the application to continue to run in the event it crashes or the connection is timed out. 



