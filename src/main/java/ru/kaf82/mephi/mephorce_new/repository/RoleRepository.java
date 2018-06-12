package ru.kaf82.mephi.mephorce_new.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.kaf82.mephi.mephorce_new.model.Role;
import ru.kaf82.mephi.mephorce_new.model.RoleName;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}