package com.example.taskManager.service;

import com.example.taskManager.entity.User;
import com.example.taskManager.repository.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class CustomerUserDetailsService  implements UserDetailsService {
    private final UserRepo userRepo;

    public CustomerUserDetailsService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
    @Override
    public UserDetails loadUserByUsername(String email){
        User user = userRepo.findByEmail(email)
                .orElseThrow();
        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .roles("USER")
                .build();
    }
}
