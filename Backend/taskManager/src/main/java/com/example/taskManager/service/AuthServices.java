package com.example.taskManager.service;

import com.example.taskManager.JWT.JwtUtil;
import com.example.taskManager.dto.LoginRequestDTO;
import com.example.taskManager.dto.LoginResponseDTO;
import com.example.taskManager.dto.SignupRequestDTO;
import com.example.taskManager.entity.User;
import com.example.taskManager.repository.UserRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServices {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final JwtUtil jwtUtil;

    public AuthServices(UserRepo userRepo, JwtUtil jwtUtil ) {
        this.userRepo = userRepo;
        this.jwtUtil = jwtUtil;
    }

    public void signup(SignupRequestDTO dto){
        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
        userRepo.save(user);

    }

    public LoginResponseDTO login(LoginRequestDTO dto) {
        User user = userRepo.findByEmail(dto.getEmail()).orElseThrow(()-> new RuntimeException("User not found"));

        if(!passwordEncoder.matches(dto.getPassword(),user.getPassword())){
            throw  new RuntimeException("Incorrect Password");
        }
        String token = jwtUtil.generateToken(user.getEmail());



        return new LoginResponseDTO(
                "Login Successful",
                token
        );
    }


}
