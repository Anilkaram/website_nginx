output "ansible_public_ips" {
    description = "Public IPs of the Ansible instances"
    value       = aws_instance.ansible[*].public_ip
}
