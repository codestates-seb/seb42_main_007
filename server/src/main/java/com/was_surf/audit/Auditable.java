package com.was_surf.audit;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Auditable {
    @CreatedDate
    @Column(name = "CREATED_AT", updatable = false, nullable = false)
//    private LocalDateTime createdAt;
    private String createdAt;

    @LastModifiedDate
    @Column(name = "LAST_MODIFIED_AT", nullable = false)
//    private LocalDateTime updatedAt;
    private String updatedAt;
}
