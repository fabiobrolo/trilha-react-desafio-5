import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://zxrzdjhydpzaikkjhwja.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cnpkamh5ZHB6YWlra2pod2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MjMxNzEsImV4cCI6MjA0MzM5OTE3MX0.BtLh_B8vq4nW49NCxP61rBFQUOCAAe2R5k_CpzP3rw8",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cnpkamh5ZHB6YWlra2pod2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MjMxNzEsImV4cCI6MjA0MzM5OTE3MX0.BtLh_B8vq4nW49NCxP61rBFQUOCAAe2R5k_CpzP3rw8"
    }
})