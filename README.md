# Gym Buddies
*by Zachery Haley* | [Download App From Expo](https://expo.io/artifacts/3de79d74-dc8d-4d7d-8bd8-a13a10c2a1a6)

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
I used a Python's Django framework for the backend server. I chose this framework because I had never used it before and wanted to learn it and also felt that that all the built in functionality would allow me to be able to set up such a verbose backend quickly without having to write so much of my own boilerplate code. I was able to use the functionality combined with some boilerplate coding to make create complex Views that accessed several tables at once and took the responsibility off the user from manually typing certain information allowing them a convient experience.

```
def userWeight(request, id):
    if request.method == 'GET':
        queryset = DailyWeight.objects.all().filter(user_id=id) 
        queryArray = []
        for key in queryset:
            queryArray.append(serializers.serialize('json', [ key, ]))    
        return HttpResponse(queryArray, content_type="application/x-javascript")
    if request.method == 'POST':
        userQs = User.objects.get(id=id)
        newWeight = request.POST.get('weight')
        date = datetime.date.today()
        entry_date = date
        if userQs.goal == 'loss':
                amount = int(userQs.weight) - int(newWeight)
                url = f'https://gym-buddiesapp.herokuapp.com/api/users/{int(id)}/loss'
                lossObj = {"amount":  amount, "entry_date": entry_date,
                "loser_id": int(id) }
                x = requests.post(url, data = lossObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                activity = Activity(todayz_weight_id=thisweight.id, entry_date=entry_date, user_id=id)
                activity.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                totalUrl = f'https://gym-buddiesapp.herokuapp.com/api/users/{int(id)}/totalloss'
                trl = requests.get(totalUrl)
                return HttpResponse([x, jsonWeight, trl], content_type="application/x-javascript")    
        if userQs.goal == 'gain':
                amount = int(newWeight) - int(userQs.weight)
                url = f'https://gym-buddiesapp.herokuapp.com/api/users/{id}/gain'
                gainObj = {"amount":  amount, "entry_date": entry_date,
                "gainer_id": int(id) }
                x = requests.post(url, data = gainObj)
                thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
                thisweight.save()
                activity = Activity(todayz_weight_id=thisweight.id, entry_date=entry_date, user_id=id)
                activity.save()
                jsonWeight = serializers.serialize('json', [ thisweight, ])
                totalUrl = f'https://gym-buddiesapp.herokuapp.com/api/users/{int(id)}/totalgain'
                trl = requests.get(totalUrl)
                return HttpResponse([x, jsonWeight, trl], content_type="application/x-javascript")    
        dailyweight = TodaysWeight(
            weight=newWeight, entry_date=entry_date,
                    userId_id=id)
        dailyweight.save()
        activity = Activity(todayz_weight_id=dailyweight.id, entry_date=entry_date, user_id=id)
        activity.save()
        thisweight = TodaysWeight(weight=newWeight, entry_date=entry_date, 
                userId_id=id)
        jsonWeight = serializers.serialize('json', [ thisweight, ])
        return HttpResponse([jsonWeight], content_type="application/x-javascript")    
        
```

#### Postgress-SQL
I optioned for this rather than the built-in SQLite because it was much easier to access the data information as I debugged and troubleshooted my API calls.


  
## Challenges and The Future

I created this application because I knew I wanted to work with new technologies to continue growing my understanding of different types of software development beyond strictly web development. Some early challenges came from starting the backend. While the amount of built in technology that came with Django was super helpful later on, just going through all the documentation and learning what I needed and what I could do without took some time. Learning how to use screens rather than webpages within mobile technology, having to use React-Natives stylesheets to create RAW css rather than relying on bootstrap and built in CSS tools,  and using async storage rather than cookies also presented a brand new set of learning moments for myself. Finally figuring out how to deploy a backend on its own for the Mobile App to make API calls to rather than having them bundled together like you do for web development took me some time to figure out.

#### The Future
One thing I'm happy about with this app is the room for growth. Giving the user an even more indepth experience such as posting videos, searching, gathering nutrition and caloric intake through API calls without taking away from the simplistic design. I believe I could also add in more research into packages that would allow more modern design that we see in Bootstrapped-CSS. Finally I think working on some performance bottlenecks would be good especially in areas like the Activity screen to where it wouldn't have to query the entire database or make so many api calls all at once.
