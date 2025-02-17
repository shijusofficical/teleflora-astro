import http from 'k6/http';
import { check, sleep } from 'k6';

// Test configuration
export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp-up to 50 users in 30 seconds
    { duration: '1m', target: 50 },   // Stay at 50 users for 1 minute
    { duration: '20s', target: 0 },   // Ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    http_req_failed: ['rate<0.01'],   // Failure rate should be less than 1%
  },
};

export default function () {
  const res = http.get('https://teleflora-poc.mozcomtest.com/en');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simulate user think time
}
