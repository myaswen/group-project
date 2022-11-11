from .db import db, environment, SCHEMA
from datetime import datetime


class Comment(db.Model):
  __tablename__ = 'comments'

  if environment == 'production':
    __table_args__ = {'schema': SCHEMA }

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  post_id = db.Column(db.Integer, db.ForeignKey("posts.id"))
  comment = db.Column(db.String(255), nullable=False)
  created_at = db.Column(db.DateTime(), default=datetime.utcnow())
  updated_at = db.Column(db.DateTime(), default=datetime.utcnow())
