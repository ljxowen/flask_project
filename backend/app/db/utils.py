from app.models.user import User
from app.models.question import Question
from sqlalchemy import and_

#CRUD operations

#User
def get_user_by_id(db_session, id):
    return db_session.query(User).filter(User.id == id).first()


def get_user_by_username(db_session, first_name, last_name):
    return db_session.query(User).filter(
                and_(User.first_name == first_name, 
                     User.last_name == last_name)
                ).first()


def get_user_by_mail(db_session, email):
    return db_session.query(User).filter(User.email == email).first()


def get_users(db_session):
    return db_session.query(User).all()


def create_user(db_session, first_name, last_name, email):
    user = User(
        email=email,
        first_name=first_name,
        last_name=last_name,
    )

    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    return user


def update_user(db_session, current_email, first_name, last_name, new_email=None):
    user = db_session.query(User).filter(User.email == current_email).first()

    if user:
        user.first_name = first_name
        user.last_name = last_name
        if new_email: 
            user.email = new_email

        db_session.commit()
        db_session.refresh(user)

    return user


def delete_user(db_session, email):
    user = db_session.query(User).filter(User.email == email).first()

    if user:
        db_session.delete(user)
        db_session.commit()

    return user