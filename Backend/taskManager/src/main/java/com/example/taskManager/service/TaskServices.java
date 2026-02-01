package com.example.taskManager.service;

import com.example.taskManager.dto.TaskRequestDTO;
import com.example.taskManager.dto.TaskResponseDTO;
import com.example.taskManager.entity.TaskEntity;
import com.example.taskManager.entity.User;
import com.example.taskManager.repository.TaskRepo;
import com.example.taskManager.repository.UserRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServices {

    private final TaskRepo taskRepo;

    private final UserRepo userRepo;

    public TaskServices(TaskRepo taskRepo, UserRepo userRepo) {
        this.taskRepo = taskRepo;
        this.userRepo = userRepo;
    }

    private User getLoggedInUser(){
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        return userRepo.findByEmail(email).orElseThrow();
    }

    public TaskResponseDTO createTask( TaskRequestDTO taskRequestDTO) {
        User user = getLoggedInUser();


        TaskEntity task = new TaskEntity();
        task.setTitle(taskRequestDTO.getTitle());
        task.setDescription(taskRequestDTO.getDescription());
        task.setCompleted(taskRequestDTO.isCompleted());
        task.setUser(user);

        TaskEntity savedTask = taskRepo.save(task);
        return mapToResponse(savedTask);
    }

    public List<TaskResponseDTO> getTasks() {
        User user = getLoggedInUser();
        return taskRepo.findByUserId(user.getId())
                .stream()
                .map(this::mapToResponse)
                .toList();
    }


    private TaskResponseDTO mapToResponse(TaskEntity taskEntity) {
        TaskResponseDTO taskResponseDTO = new TaskResponseDTO();
        taskResponseDTO.setId(taskEntity.getId());
        taskResponseDTO.setTitle(taskEntity.getTitle());
        taskResponseDTO.setDescription(taskEntity.getDescription());
        taskResponseDTO.setCompleted(taskEntity.isCompleted());
        return taskResponseDTO;
    }

    public TaskResponseDTO updateTask(Long taskId, TaskRequestDTO taskRequestDTO) {
        User user = getLoggedInUser();

        TaskEntity task = taskRepo.findByIdAndUserId(taskId, user.getId()).orElseThrow();

        task.setTitle(taskRequestDTO.getTitle());
        task.setDescription(taskRequestDTO.getDescription());
        task.setCompleted(taskRequestDTO.isCompleted());

        return mapToResponse(taskRepo.save(task));
    }

    public void deleteTask(Long taskId) {
        User user = getLoggedInUser();

        TaskEntity task = taskRepo.findByIdAndUserId(taskId, user.getId()).orElseThrow();
        taskRepo.delete(task);
    }
}
