# app/commands/authenticate_user.rb

class AuthUser
  include JWTHelper
  prepend SimpleCommand

  def initialize(email, password)
    @email = email
    @password = password
  end


  def call
    if user
      JWTencode({user_id: user.id, exp: 24.hours.from_now.to_i})
    end
  end


  private

  attr_accessor :email, :password

  def user
    user = User.find_by({email: email})
    return user if user && user.authenticate(password)

    errors.add :user_authentication, 'invalid credentials'
    nil
  end
end