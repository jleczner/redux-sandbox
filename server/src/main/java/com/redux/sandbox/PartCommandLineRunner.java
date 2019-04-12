package com.redux.sandbox;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class PartCommandLineRunner implements CommandLineRunner {
    private final PartRepository partRepository;

    public PartCommandLineRunner(PartRepository partRepository) {
        this.partRepository = partRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Stream.of(
                "Somethin' Actuator",
                "Flux Capacitor",
                "Death Ray",
                "Wing-Ding"
        ).forEach(name ->
                partRepository.save(new Part(name))
        );
    }
}
