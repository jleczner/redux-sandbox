package com.redux.sandbox;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
interface PartRepository extends JpaRepository<Part, Long> {
}
