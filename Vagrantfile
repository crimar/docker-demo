Vagrant.configure("2") do |config|
	config.vm.box = "ubuntu/trusty64"
	config.vm.hostname = "trusty"
	config.vm.provision "docker"
	config.vm.network "forwarded_port", guest: 8080, host: 8080
	config.vm.network "forwarded_port", guest: 8081, host: 8081
	config.vm.network "forwarded_port", guest: 8082, host: 8082
end
