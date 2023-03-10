# Issues

## Create Assessment

    - [ ] Modify the `NewAssessment.jsx` component to create an assessment form for the front-end
    - [ ] Allow Users to submit assessment data (cat details, instrument name, calculated score, and determined risk level)
    - [ ] Send the assessment data from the front-end to the API
    - [ ] Send the assessment data from the API to the Assessment-Service
    - [ ] Create the "assessments" table in the database with the appropriate columns (id, cat_name, cat_date_of_birth, instrument, score, risk_level, created_at, updated_at, deleted_at)
    - [ ] Insert the assessment data from the Assessment-Service into the database using sequelize

## Implement react-bootstrap

    - Style as you go by using react-bootstrap components
        - [ ] Assessment New
        - [ ] Assessment List

## View Assessment List

    - [ ] Modify the `AssessmentList.jsx` component to display assessment data on the front-end using React Table (react-table)
    - [ ] Use the Assessment-Service to retrieve assessment data from the database using sequelize
    - [ ] Return assessment data from the Assessment-Service to the API
    - [ ] Return assessment data from the API to the front-end
    - [ ] Populate your front-end list with the returned assessment data

## Supervisor Login

    - [ ] Create a login page and login form in the client folder
    - [ ] Allow users to submit login data (username, password)
    - [ ] Send the login data from the front-end to the API
    - [ ] Send the login data from the API to the User-Service
    - [ ] Create the "users" table in the database with the appropriate columns (first_name, last_name, username, password, is_supervisor, created_at, updated_at, deleted_at)
    - [ ] Enter a user into this table with the appropriate information (hint: you will need to preemptively hash a password using bcrypt)
    - [ ] Authenticate the user using bcrypt to compare against the user's hashed password that's stored in the database

## Allow Supervisors to Delete Assessments from List

    - [ ] Add a "Delete" button to each assessment list row
    - [ ] Implement the delete functionality in the front-end, API, and microservices
    - [ ] Use the built-in soft delete in sequelize. This does NOT mean completely removing them from the database. A "soft delete" means flagging deleted records with a "deleted_at" datetime so that they can be filtered out by future database queries
    - [ ] Update the assessment list to remove the correct row when a record is successfully deleted (without having to refresh the page)
    - [ ] Modify the assessment list so that it only retrieves non-deleted assessments
    - [ ] Modify the assessment list so that it is only accessible by authenticated Supervisors

## Prepare your presentation

    - [ ] Prepare your presentation
