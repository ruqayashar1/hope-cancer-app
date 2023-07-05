class PatientsController < ApplicationController
    def create
        patient = Patient.create(signup_params)
        if patient.valid?
          #session[:user_id] = user.id
          render json: patient, status: :created
        else
          render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def signup_params
        params.permit(:name, :password, :email)
    end
end
