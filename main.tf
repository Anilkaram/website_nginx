terraform {
    required_providers {
        aws = {
        source  = "hashicorp/aws"
        version = "~> 5.0" # Adjust the version as needed
        }
    }
}
provider "aws" {
  region = "us-east-1" 
}
resource "aws_instance" "ansible" {
    ami = "ami-084568db4383264d4"# Example AMI, replace with your desired AMI
    instance_type = "t2.micro" # Example instance type, adjust as needed
    key_name = "key_first" # Replace with your key pair name
    count = 2 # Number of instances to create
    tags = {
        Name = "ansible_instance"
    }
    security_groups = ["Launch-wizard-1"] # Replace with your security group names
    root_block_device {
        volume_size = 28 # Size in GB, adjust as needed
        volume_type = "gp3" # General Purpose SSD
    }
}
