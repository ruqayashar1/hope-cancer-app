class SessionsController < ApplicationController

    def index
        patients = Patient.all
        render json: patients, status: :ok
    end

    def create
        patient = Patient.find_by(email: params[:email])
        if patient&.authenticate(params[:password])
          #session[:patient_id] = patient.id
          render json: patient, status: :created
        else
          render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end
end