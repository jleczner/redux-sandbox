package com.redux.sandbox;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartController {
    private PartService partService;

    public PartController(PartService partService) {
        this.partService = partService;
    }

    @GetMapping("/getAllParts")
    public Iterable<Part> getAllParts() {
        return partService.getAllParts();
    }
}
