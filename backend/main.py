from config import app, db
import route

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    print("start application")
    app.run(debug=True, port=5001)