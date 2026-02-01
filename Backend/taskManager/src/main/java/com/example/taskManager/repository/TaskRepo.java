package com.example.taskManager.repository;

import com.example.taskManager.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface TaskRepo extends JpaRepository<TaskEntity, Long> {
    List<TaskEntity> findByUserId(Long userId);


    Optional<TaskEntity> findByIdAndUserId(Long id, Long userId);
}
