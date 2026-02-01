package com.example.taskManager.controller;

import com.example.taskManager.JWT.JwtUtil;
import com.example.taskManager.dto.LoginRequestDTO;
import com.example.taskManager.dto.LoginResponseDTO;
import com.example.taskManager.dto.SignupRequestDTO;
import com.example.taskManager.service.AuthServices;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")

public class UserController {

    private final AuthServices authServices;
    private final JwtUtil jwtUtil;

    public UserController(AuthServices authServices, JwtUtil jwtUtil) {
        this.authServices = authServices;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Valid @RequestBody SignupRequestDTO dto) {
        authServices.signup(dto);
        return ResponseEntity.ok("Signup Successful");
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO dto) {


        return ResponseEntity.ok(authServices.login(dto));
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("Health check Successful");

    }
}
