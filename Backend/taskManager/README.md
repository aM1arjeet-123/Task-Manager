Task Manager Backend:-
    
    Tech Stack:-
        Java 21
        Spring Boot 4.0.2
        Spring Security
        JWT (JSON web Token)
        Spring Data JPA
        PostgreSQL
        Hibernate
        Maven
        Lombok
    
    Features:-
        User Signup  and Login
        JWT-based authentication
        Secure APIS (stateless)
        CRUD operation on tasks
        Users can only access their own tasks
        Task completion status
        DTO-based validation
        CORS configured for react frontend.

    Authentication Flow (JWT)
        User signs up
        User Logs in with email and password
        Server returns a JWT token
        Client sends token in every request header
        server validates token using a filter
        Authenticated user is resolved fromm jwt.
        Tasks are fetched only for the logged in user.

API Endpoints:-
    Auth API:-
        post:- {BASE}/auth/signup
        post:- {Base}/auth/login

    Task APIs:-
        
        post  :- {base}/tasks                              {Create task}
        get   :- {base}/tasks                              {Get tasks}
        put   :- {base}/tasks/{id}                         { update task}
        delete:- {base}/tasks/{id}                         {delete task}