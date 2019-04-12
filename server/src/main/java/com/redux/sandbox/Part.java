package com.redux.sandbox;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
class Part {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Part(String name) {
        this.name = name;
    }
}
