package com.example.taskManager.controller;

import com.example.taskManager.dto.TaskRequestDTO;
import com.example.taskManager.dto.TaskResponseDTO;
import com.example.taskManager.service.TaskServices;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskServices taskServices;

    public TaskController(TaskServices taskServices) {
        this.taskServices = taskServices;
    }

    @PostMapping
    public TaskResponseDTO createTask(@Valid @RequestBody TaskRequestDTO taskRequestDTO, HttpSession session) {
        return taskServices.createTask( taskRequestDTO);
    }

    @GetMapping
    public List<TaskResponseDTO> getTasks() {
        return taskServices.getTasks();
    }

    @PutMapping("/{id}")
    public TaskResponseDTO update(
            @PathVariable Long id,
            @Valid @RequestBody TaskRequestDTO dto
    ){
        return taskServices.updateTask(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskServices.deleteTask(id);

    }
}
