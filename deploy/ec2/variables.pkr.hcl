variable "ami_name" {
  type = string
}

variable "instance_type" {
  type    = string
  default = "t2.medium"
}

variable "ami_region" {
  type    = string
  default = "us-west-2"
}

variable "ami_groups" {
  type    = list(string)
  default = ["all"]
}

variable "ami_regions" {
  type    = list(string)
  default = ["us-west-2", "us-west-1"]
}

variable "ssh_private_key" {
  type = string
}
