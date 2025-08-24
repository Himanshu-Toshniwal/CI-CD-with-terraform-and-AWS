variable "region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "public_key" {
  description = "SSH public key"
  type        = string
}

variable "private_key" {
  description = "SSH private key"
  type        = string
}

variable "key_name" {
  description = "Key pair name"
  type        = string
  default     = "deployer-key"
}