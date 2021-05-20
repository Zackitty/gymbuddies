from app.models import User, Block
from app import app, db
from dotenv import load_dotenv
import bcrypt
load_dotenv()
with app.app_context():
  db.drop_all()
  db.create_all()




  db.session.add(demo_user)
  db.session.add(mister_3)
  db.session.add(miss_monday) 
  db.session.add(Zackitty)
  db.session.add(miss_goldenweek)
 
  db.session.commit()