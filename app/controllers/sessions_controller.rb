class SessionsController < ApplicationController
    def create
        puts 'hello'
        patient = PatientSignup.find_by(email: params[:email])
        puts params
        puts patient
        puts patient[:email]
        puts patient[:password]
        if patient&.authenticate(params[:password])
          #session[:patient_id] = patient.id
          render json: patient, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end
    # def destroy
    #     session[:user_id] = nil
    #     head :no_content
    # end
end
