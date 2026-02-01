package com.example.taskManager.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequestDTO {
    @NotBlank(message = "Title required")
    private String title;
    private String description;

    private boolean completed;
}
