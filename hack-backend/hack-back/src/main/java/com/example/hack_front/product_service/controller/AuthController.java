package com.example.hack_front.product_service.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Connect with Vite + React frontend
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Mock authentication based on the email/password from the React UI
        if ("name@example.com".equals(loginRequest.getEmail()) && "password".equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(new LoginResponse("Successfully logged in!", "demo-jwt-token-12345"));
        } else {
            return ResponseEntity.status(401).body(new ErrorResponse("Invalid email or password. Try name@example.com / password."));
        }
    }
}

// Request Models
class LoginRequest {
    private String email;
    private String password;

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}

// Response Models
class LoginResponse {
    private String message;
    private String token;

    public LoginResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }

    public String getMessage() { return message; }
    public String getToken() { return token; }
}

class ErrorResponse {
    private String error;

    public ErrorResponse(String error) {
        this.error = error;
    }

    public String getError() { return error; }
}
