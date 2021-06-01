# Gym Buddies
*by Zachery Haley* | [Download App From Expo](https://expo.io/artifacts/a14a8029-a43c-4407-a19c-4b1e93795024)

### Table of Contents
- [The User Interface](https://github.com/Zackitty/gymbuddies#the-user-interface)
- [Architecture & Technologies](https://github.com/Zackitty/gymbuddies#architecture-&-technologies)
- [The FrontEnd](https://github.com/Zackitty/gymbuddies#the-frontend)
- [The Backend](https://github.com/Zackitty/gymbuddies#the-backend)
- [Challenges & The Future](https://github.com/Zackitty/gymbuddies#challenges-and-the-future)

## The User Interface
GymBuddies is a Mobile App created using [React-Native](https://reactnative.dev/) to make API calls toe  with a [Django](https://www.djangoproject.com/) Backend server that allows users to record their workouts, lifts, and weight and see both their progress and the progress of friends that they add. 

Users will view a splash with pressable buttons allowing them to sign up or in. Upon signing in or up, the the [Redux Store](https://redux.js.org/api/store) changes the current state and sets the key NeedSignIn to false. This will trigger a useEffect on the splash screen that will push the Home Screen to the top of the top of the screen stack and reset it as the bottom of the stack to prevent unwanted side effects from a logged in user heading back to the Splash Screen. 

From the Home Screen you have many presssable buttons designed similar to the Windows user interface. Each one will use the [Stack.Navigator](https://reactnavigation.org/docs/stack-navigator/) to dispatch Navigate and push a new screen onto the top of the stack. Each screen will show previous entries for their own record using API calls to the backend server and allow them to log new entries by opening up [React-Native Modal](https://reactnative.dev/docs/modal) technology.


## Architecture & Technologies

The Full Stack Mobile Application takes POST and GET requests to a Backend Django Server where it can query data in a backend SQL database. The Django-Server takes a RESTFul API call from the React-Native mobile APP to make a GET request to use [Postgress Sql](https://www.postgresql.org/) database to to show previous entries by the user and will make a POST request upon pressing a button to open the modal to log a new activity.

The application also allows users to add other users with similar goals to theirs and see their activity. Due to some complications by created by the rules of JSON Parsing needing not allowing double or single quotes to exist within a seperate pair of double quotes I created a very inventive way of creating a feed consisting of every activity your friends create.

In the Django Backend I had every activity logged into a SQL table and and made several api calls that checked every entry in the Activity database to see if they were friends with you, If the database entry was on your friends list it checked what the activity was and made another api call using the activity id to fetch the database entry associated with it.
```
const fetchFriends = async(e) => {
      const friends = {}
      let friendData = []

      await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${id}/friends`)
      .then(res => res.json())
      .then(data => friendData = data)
     for (key in friendData){
      friends[friendData[key].fields.friends_id] = friendData[key].fields.friends_id
     }

   
     fetchActivity(friends)
    }

    const fetchActivity = async(friends) => {
    

    await fetch(`https://gym-buddiesapp.herokuapp.com/api/activity`)
    .then(res => res.json())
    .then(data => activityHandler(data, friends))
    // await fetch(`${apiUrl}/users/${id}/get`)
    // .then(res => res.json())
    // .then(data => console.log(data))
    }

  const activityHandler = async(data, friends) => {

   queryArray = []

    for(key in data){
      
      if (friends[data[key].user_id]) {
        keyObj = {}
        await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${data[key].user_id}/get`)
        .then(res => res.json())
        .then(data => keyObj["user"] = data[0].fields)
        keyObj['entry_date'] = data[key].entry_date
        
       
        if (data[key].addfriend_id){
        
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/${data[key].addfriend_id}/get`)
            .then(res => res.json())
            .then(data =>  keyObj["friend"] = data[0].fields.username)
                    }
        if (data[key].exercizes_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/exercisers/${data[key].exercizes_id}`)
            .then(res => res.json())
            .then(data => keyObj['exerciser']  = data[0].fields)
                      
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/exercises/${keyObj['exerciser'].exercise}`)
            .then(res => res.json())
            .then(data => keyObj['exercise'] = data[0].fields)    
                    }
        if (data[key].gainz_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/gain/${data[key].gainz_id}`)
            .then(res => res.json())
            .then(data => keyObj['gain'] = data[0].fields)  
                  }
        if (data[key].lift_zet_id){         
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/liftsets/${data[key].lift_zet_id}`)
            .then(res => res.json())
            .then(data =>   keyObj['liftset'] =data[0].fields)
                  
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/lifts/${keyObj['liftset'].lift_name}`)
            .then(res => res.json())
            .then(data =>  keyObj['lift'] = data[0].fields)    
                  }    
        if (data[key].lozz_id){               
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/loss/${data[key].lozz_id}`)
            .then(res => res.json())
            .then(data => keyObj['loss'] = data[0].fields)
                  }    
        if (data[key].todayz_weight_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/dailyweight/${data[key].todayz_weight_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['todaysweight'] = data[0].fields)   
                   
        }
        if (data[key].total_gainz_id){
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/totalgain/${data[key].total_gainz_id}`)
            .then(res => res.json())
            .then(data =>keyObj['totalgain'] = data[0].fields.total_gain.toString())           
                  }    
        if (data[key].total_lozz_id){  
            await fetch(`https://gym-buddiesapp.herokuapp.com/api/users/totalloss/${data[key].total_lozz_id}`)
            .then(res => res.json())
            .then(data =>  keyObj['totalloss'] = data[0].fields.total_loss.toString())  
                  }
        queryArray.push(keyObj)
                  }
                }
        setActivityScroll(queryArray)
           
  }
```




  
## The FrontEnd

The application is relies on simplistic front end design to allow users to quickly log their activities without hassle.
 
### Frontend Technologies:

#### React-Native & Redux
I used React-Native because I wanted to quickly learn mobile development and felt being able to combine that with what I felt was the best web frame work, React.js, I'd be able to create a mobile app that gave the user the best experience and allowed for the most growth of myself as a developer in both Mobile Development and my raw React.js skills. It would also allow me to gain experience in both Android and Ios as both are supported and compiled. 

 
## The BackEnd

#### Django
I used a Python's Django framework for the backend server. I chose this framework because I had never used it before and wanted to learn it and also felt that that all the built in functionality would allow me to
be able to set up such a verbose backend quickly without having to write so much of my own boilerplate code.

#### SQL-Alchemy 
I used this because it was another lightweight choice for a very simple back end application. I used the database to store users, all messages created in the chat, and all the blocks created between users. The reason I stored all the messages in a database was pool the last 10 messages and send them through the same process a message sent in real time through sockets would along the frontend react components. This allows users navigating to the website to be able to continue the chat even if they weren't in the room at the time another user sent a message.

### Flask-SocketIO
I used Flask-SocketIO to use allow the Flask server to facilitate communications between the backend with the the front end Socket.IO-client.


```
@bp.route('')
def get_chat():
    response = db.session.query(
        Comment
    ).order_by(Comment.id.desc()).limit(10)
    
    return  {result.id: { "user": result.username, "text": result.content, "avatar": result.avatar, "belt_color": result.belt_color, "user_id": result.user_id } for result in response}
 ```
 ### Docker
 I used a docker container and eventlet to create a container for the environment to automate consistent deployment of the application.
  
## Challenges and The Future

I created this application because I wanted a way I could talk to my friends during the pandemic and watch jiujitsu videos with them in real time. I'm always creating new applications with the mindset of something I know that I or other users would want to be able to use in every day life or to defeat an obstacle we're currently facing.

Creating this app was an incredibly fun being able to work with using the full stack in many different ways from front to back sockets as well as changing the entire UI using both references in the front end store and the back end database. I made the bulk of the website with technologies I had only learned a few weeks prior from the sockets to the Python language along with its Flask framework.

#### The Future
I definitely want to continue working with Docker and be able to have it contain a video playlist that it can stream rather than relying on OBS and Twitch to host the video. I'd also like to ocntinue working to bring a more pleasing UI as I study more styles people implement in CSS.
