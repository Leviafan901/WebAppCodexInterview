package com.taskmanager.app.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.serviceregistry.Registration;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.taskmanager.app.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.taskmanager.app.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Region.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Country.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Location.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Department.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Department.class.getName() + ".employees", jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Task.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Task.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Employee.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Employee.class.getName() + ".jobs", jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Job.class.getName(), jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.Job.class.getName() + ".tasks", jcacheConfiguration);
            cm.createCache(com.taskmanager.app.domain.JobHistory.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
